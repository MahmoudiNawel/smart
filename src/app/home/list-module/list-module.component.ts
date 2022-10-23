import { Component, Input, OnInit , ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { Subject } from 'rxjs/Subject';
//import { MymqttserviceService } from './services/mymqttservice/mymqttservice.service';
import { MymqttserviceService } from 'src/app/services/mymqttservice/mymqttservice.service';
import { IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.scss']
})
export class ListModuleComponent implements OnInit  {

  selected = false;
  value = false;
  value1;
  label: string;
  message: string;
  topicName: string;
  mqttSub: Subscription;
  publishObs: Subscription;
  isConnected: boolean = false;
  @ViewChild('msglog', { static: true }) msglog: ElementRef
  constructor(private myservice: MymqttserviceService) { }

  ngOnInit() {
    var topic = 'cflx/cmd/Run' //topic to subscribe to device status messages
    this.mqttSub = this.myservice.subscribeMqtt(topic).subscribe((message: IMqttMessage) => {
      if (!message.retain) {
        this.message = message.payload.toString();
        console.log(this.message);
        this.topicName = message.topic.split('/')[3];
        var device = this.processMessage(this.topicName, this.message);
      }
    });

  }
  clickButton($event) {
    this.selected = !this.selected;
    console.log(this.selected);
    var message
    var topic = 'cflx/cmd/Run';
   if(this.selected == true){
     //Publish to MQTT
     this.message = "ON" 
     //var message = 'new run the device';
     this.publishObs = this.myservice.publish(topic, "ON");
     //console.log("publish")
     Swal.fire({
      //title: 'AIR CONDTIONNAR ON',
      title : 'LIGHTING ON',
      //text: 'You will not be able to recover this imaginary file!',
      icon: 'success',
      //showCancelButton: true,
      confirmButtonText: 'Done',
      //cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your imaginary file has been deleted.',
        //   'success'
        // )
    
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
   }
   else {
    this.message = "OFF"
   this.publishObs = this.myservice.publish(topic, this.message );

   }
   
  }
  run() {
    this.label = 'Run Clicked';
    //Publish to MQTT
    var topic = 'cflx/cmd/Run'; 
    var message = 'new run the device';
    this.publishObs = this.myservice.publish(topic, message);
  }

  stop() {
    this.label = 'Stop Clicked';
    //Publish to MQTT
    var topic = 'cflx/cmd/Stop'; 
    var message = 'new stop the device'
    this.publishObs = this.myservice.publish(topic, '');
  }

  processMessage(topic, message) {
    //code to process the message and display on the view
    return null;
  }

  ngOnDestroy() {
    this.publishObs.unsubscribe();
    if (this.mqttSub) {
      this.mqttSub.unsubscribe();
    }
  }
}

//   clickButton($event) {
//     this.selected = !this.selected;
//   }
 
// }
