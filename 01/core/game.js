import {GameStatuses} from "./game-statuses";

export class Game{
    #status = GameStatuses.SETTINGS
    #googlePosition = null
    #settings = {
        gridSize: {
            columns: 4,
            rows: 4
        },
        googleJumpInterval: 1000
    }
    start(){
        if(this.#status !== GameStatuses.SETTINGS){
            throw new Error('Game already started')
        }
        this.#status = GameStatuses.IN_PROGRESS
        this.#googlePosition = {
            x: 0,
            y: 0
        }
    }
    get status(){
        return this.#status
    }
    get googlePosition(){
        return this.#googlePosition
    }
    get
}