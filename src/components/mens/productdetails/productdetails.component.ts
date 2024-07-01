import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  mainImageSrc = 'https://i.pinimg.com/originals/3d/ad/13/3dad1341a362b575acc672fdc874f4d7.jpg'; // Default main image

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

}
