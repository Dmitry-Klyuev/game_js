import {describe, expect, test} from '@jest/globals';
import {Game} from "./game";
import {GameStatuses} from "./game-statuses";

describe('game', () => {
    test('should be work and return status', () => {
        const game = new Game()
        expect(game.status).toBe(GameStatuses.SETTINGS)
    })

    test('game start and return status', async() => {
        const game = new Game()
        await game.start()
        expect(game.status).toBe(GameStatuses.IN_PROGRESS)

    })
    test('google should be in the Grid after start', async() => {
        const game = new Game()
        expect(game.googlePosition).toBeNull()
        await game.start()
        expect(game.status).toBe(GameStatuses.IN_PROGRESS)
        expect(game.googlePosition.x).toBeLessThanOrEqual(game.settings.gridSize.columns)
    })
})