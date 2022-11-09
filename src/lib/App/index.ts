// import { CanvasCore } from './Implementation/CanvasCore';
import { ThreeCore } from './Implementation/ThreeCore';

import { version } from 'njscore';

export class App {
    constructor() {
        console.log(version);
        // new CanvasCore('SandBox');
        new ThreeCore('SandBox');
        console.log('Sandbox starter!!!!!');
    }
}