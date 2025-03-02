import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {

        //Background image
        this.background = this.add.image(512, 384, 'background');

        // Display the wheel images
        let wheel = this.add.image(512, 384, 'wheel');
        let wheelBase = this.add.image(512, 384, 'wheelBase');
        let wheelPointer = this.add.image(512, 384, 'wheelPointer');

        // Set the Wheel spin images scale
        let wheelScale = 0.3
        wheel.setScale(wheelScale);
        wheelBase.setScale(wheelScale);
        wheelPointer.setScale(wheelScale);

        // rotate the image

        
        

        // this.logo = this.add.image(512, 300, 'logo');

        // this.title = this.add.text(512, 460, 'Main Menu', {
        //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
