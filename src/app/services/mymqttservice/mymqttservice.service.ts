import { Injectable } from '@angular/core';
import { IMqttServiceOptions, MqttService, MqttConnectionState, IMqttMessage } from 'ngx-mqtt';
import { Observable, Subscription , BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MymqttserviceService {
  message: string;
  private subscription: Subscription;
  private endpoint: string;


  public Messages: BehaviorSubject<IMqttMessage> = new BehaviorSubject<IMqttMessage>(null);
  public Updated: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());

  constructor(private _mqttService: MqttService) {
    //_mqttService = new MqttService({ hostname: '192.168.42.102',  port: '9001' });
    this.endpoint = 'events';
    _mqttService.onConnect.subscribe((msg)=> console.log('connected'));
    _mqttService.onReconnect.subscribe((msg)=> console.log('reconnecting'));
    _mqttService.onClose.subscribe((msg) => console.log('onClose'));
    _mqttService.onError.subscribe((e) => console.log('MQTT ERROR', e));
    this.subscription = this._mqttService.observe('my/topic').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
      console.log("this.message", this.message);
    });
    
    // _mqttService.onMessage.subscribe((e) => {
    //   try {
    //     let data = e.payload.toString();
    //     let payload: any = JSON.parse(e.payload.toString());
    //     if (payload['tms']) this.Updated.next(new Date(payload.tms * 1000));
    //   } catch(e) {
    //     console.log('MQTT INVALID MESSAGE', e);
    //   }

    //   console.log("MQTT MESSAGE [" + e.topic + "]: " + e.payload.toString());
    //   this.Messages.next(e);
    //   //this.Count.next(this.Count.getValue() + 1);
    // });
   }
   
 
   subscribeMqtt(topic: string) {
    return this._mqttService.observe(topic);
  }
  publish(topic: string, message: string) {
    return this._mqttService.publish(topic, message, { qos: 2, retain: true }).subscribe();
  }

  disconnect() {
    this._mqttService.disconnect();
  }
}
export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  //broker : '192.168.42.187',
  connectOnCreate: false,
  hostname: 'localhost',
  port: 9001,
 // protocol: 'ws',
  path: '/mqtt'
};

export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

