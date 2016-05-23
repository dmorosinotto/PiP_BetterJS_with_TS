import { add as prepareMsg} from "./util";

export class Log {
    private el: HTMLElement;
    constructor(el?: HTMLElement, private prefix: string = 'Hello') {
        this.el = el || document.body;
    }
    
    print(x: number | string | Object) {
        var s: string;
        if (typeof x === 'number') {
            s = x.toFixed();
        } else if (typeof x !== 'string') {
            s = JSON.stringify(x);
        } else {
            s = x;
        }
        var t = document.createTextNode( prepareMsg(this.prefix, ' ', s) )
        var p = document.createElement("p")
        p.appendChild( t );
        this.el.appendChild( p );
    }
}