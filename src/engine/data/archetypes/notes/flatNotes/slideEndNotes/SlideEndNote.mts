import { options } from '../../../../../configuration/options.mjs'
import { claimEndManager } from '../../../InputManager.mjs'
import { FlatNote } from '../FlatNote.mjs'

export abstract class SlideEndNote extends FlatNote {
    leniency = 1

    updateSequential() {
        if (options.autoplay) return

        if (time.now < this.inputTime.min) return

        claimEndManager.claim(this.info.index, this.targetTime, this.hitbox, this.fullHitbox)
    }

    touch() {
        if (options.autoplay) return

        if (time.now < this.inputTime.min) return

        const index = claimEndManager.getClaimedTouchIndex(this.info.index)
        if (index === -1) return

        this.complete(touches.get(index))
    }

    complete(touch: Touch) {
        this.result.judgment = input.judge(touch.time, this.targetTime, this.windows)
        this.result.accuracy = touch.time - this.targetTime

        this.result.bucket.index = this.bucket.index
        this.result.bucket.value = this.result.accuracy * 1000

        this.playHitEffects(touch.time)

        this.despawn = true
    }
}
