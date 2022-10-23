import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MymqttserviceService } from './mymqttservice.service';
import { MqttService, MqttModule, IMqttServiceOptions } from 'ngx-mqtt';
import { mqttServiceFactory } from './mymqttservice.service';
export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  //broker : '192.168.42.187',
  connectOnCreate: true,
  hostname: 'localhost',
  port: 9001,
  protocol: 'ws',
 path: '/mqtt',
 keepalive: 10000

};
@NgModule({


  imports: [
    CommonModule,
    MqttModule.forRoot(
      MQTT_SERVICE_OPTIONS
    ),
  ],
  declarations: [],
  providers: [],
})
export class MymqttserviceModule { }
