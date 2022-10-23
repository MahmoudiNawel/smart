import { Component, ContentChild, OnInit } from '@angular/core';
import { MymqttserviceService } from 'src/app/services/mymqttservice/mymqttservice.service';
import { IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-etage2-level-three-two',
  templateUrl: './etage2-level-three-two.component.html',
  styleUrls: ['./etage2-level-three-two.component.scss']
})
export class Etage2LevelThreeTwoComponent implements OnInit {
  fieldTextType : boolean;
  message: string;
  topicName: string;
  mqttSub: Subscription;
  publishObs: Subscription;
  isConnected: boolean = false;
  
  constructor(private myservice: MymqttserviceService) { }

  ngOnInit()  {
    // var topic = 'presence' //topic to subscribe to device status messages
    // this.mqttSub = this.myservice.subscribeMqtt(topic).subscribe((message: IMqttMessage) => {
    //   if (!message.retain) {
    //     this.message = message.payload.toString();
    //     //console.log("this.message" );
    //     this.topicName = message.topic.split('/')[3];
    //     this.processMessage(this.topicName, this.message);
    //     //console.log("this.message" , device);
    //   }
    // });

  }

  processMessage(topic, message) {
    console.log("44message" , message)
    //code to process the message and display on the view
    return null;
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
