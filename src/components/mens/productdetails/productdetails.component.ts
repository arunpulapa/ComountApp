import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  @ViewChild('image') imageElement!: ElementRef<HTMLImageElement>;
  @ViewChild('lens') lensElement!: ElementRef<HTMLDivElement>;
  @ViewChild('result') resultElement!: ElementRef<HTMLDivElement>;
  mainImageSrc = 'https://assets.ajio.com/medias/sys_master/root/20230907/ow1O/64f91d04ddf7791519c0b1fe/-473Wx593H-466542753-blue-MODEL.jpg'; // Default main image
 zoomActive = false;
  relatedImages = [
    { src: 'https://i.pinimg.com/originals/3d/ad/13/3dad1341a362b575acc672fdc874f4d7.jpg', alt: 'Related Image 1' },
    { src: 'https://i.pinimg.com/originals/3d/ad/13/3dad1341a362b575acc672fdc874f4d7.jpg', alt: 'Related Image 2' },
    { src: 'https://i.pinimg.com/originals/3d/ad/13/3dad1341a362b575acc672fdc874f4d7.jpg', alt: 'Related Image 3' },
    { src: 'https://i.pinimg.com/originals/3d/ad/13/3dad1341a362b575acc672fdc874f4d7.jpg', alt: 'Related Image 4' },
    { src: 'https://i.pinimg.com/originals/3d/ad/13/3dad1341a362b575acc672fdc874f4d7.jpg', alt: 'Related Image 5' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  changeMainImage(newSrc: string): void {
    this.mainImageSrc = newSrc;
  }

  zoomImage(event: MouseEvent): void {
    const image = this.imageElement.nativeElement;
    const lens = this.lensElement.nativeElement;
    const result = this.resultElement.nativeElement;

    lens.style.display = 'block';
    result.style.display = 'block';

    const pos = this.getCursorPos(event);
    let x = pos.x - lens.offsetWidth / 2;
    let y = pos.y - lens.offsetHeight / 2;

    if (x > image.width - lens.offsetWidth) { x = image.width - lens.offsetWidth; }
    if (x < 0) { x = 0; }
    if (y > image.height - lens.offsetHeight) { y = image.height - lens.offsetHeight; }
    if (y < 0) { y = 0; }

    lens.style.left = x + 'px';
    lens.style.top = y + 'px';

    const cx = result.offsetWidth / lens.offsetWidth;
    const cy = result.offsetHeight / lens.offsetHeight;

    result.style.backgroundImage = `url(${image.src})`;
    result.style.backgroundSize = (image.width * cx) + 'px ' + (image.height * cy) + 'px';
    result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;

    this.zoomActive = true;
  }

  resetZoom(): void {
    const lens = this.lensElement.nativeElement;
    const result = this.resultElement.nativeElement;

    lens.style.display = 'none';
    result.style.display = 'none';

    this.zoomActive = false;
  }

  private getCursorPos(event: MouseEvent): { x: number, y: number } {
    const image = this.imageElement.nativeElement;
    const rect = image.getBoundingClientRect();

    const x = event.pageX - rect.left - window.pageXOffset;
    const y = event.pageY - rect.top - window.pageYOffset;
    return { x, y };
  }

}
