import { Scene, GameObjects } from 'phaser';

export class Spin extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('Spin');
    }

    create ()
    {

        //Background image
        this.background = this.add.image(512, 384, 'background');

        // Display the wheel images
        let wheelBase = this.add.image(512, 384, 'wheelBase');
        let wheel = this.add.image(512, 335, 'wheel');
        let wheelPointer = this.add.image(512, 384, 'wheelPointer');

        // Set the Wheel spin images scale
        let wheelScale = 0.3
        wheel.setScale(wheelScale);
        wheelBase.setScale(wheelScale);
        wheelPointer.setScale(wheelScale);


        this.input.addListener('pointerdown', () => {

            let spin = Math.random()*100;

             // spin the wheel
            this.tweens.add({
               
                targets: wheel, // your image that must spin
                rotation: spin, //rotation must be radian
                duration: 3000 //duration is in milliseconds
            })

        });
    }
}
