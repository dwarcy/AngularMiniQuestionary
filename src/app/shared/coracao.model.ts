import { publishFacade } from "@angular/compiler";

export class Coracao {

    constructor( public cheio: boolean,
        public urlCoracaoCheio: string = ' assets/heartfull.png ',
        public urlCoracaoVazio: string = ' assets/heartempty.png ',
    ) {}

    public exibeCoracao(): string {

        if(this.cheio) {
            return this.urlCoracaoCheio
        } else {
            return this.urlCoracaoVazio
        }

    }

}