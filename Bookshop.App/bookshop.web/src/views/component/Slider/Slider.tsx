import { Component, ReactNode, useState } from "react";
import { BookForm } from "../../../services/book.service";
import '../../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { type } from "os";
interface BookProp {
  books: BookForm[];
  type: string;
}
export default class Slider extends Component<BookProp>
{
  onClickPrev(): void {

  }
  render(): ReactNode {

    const type = this.props.type;
    function prev(): void {
      const productContainers = document.querySelectorAll("." + type);
      productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
        item.scrollLeft -= containerWidth;
      })
    }
    function next(): void {
      const productContainers = document.querySelectorAll("." + type);
      productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
        item.scrollLeft += containerWidth;
      })
    }
    return (
      <div>
        <div className="pre-btn" onClick={prev}>

          <i><FontAwesomeIcon icon={faChevronLeft} /></i>
        </div>
        <div className="nxt-btn" onClick={next}>

          <i> <FontAwesomeIcon icon={faChevronRight} /></i>
        </div>
        {/* <div className="product-container"> */}
        <div className={this.props.type + ' product-container'}>
          {this.props.books.map((item) =>
            <div className="product-card" key={item.id}>
              <div className="product-image" >
                {
                  item.isDiscount&&item.discount!=0?( <span className="discount-tag">{item.discount}% off</span>):(<div></div>)
                }
               
                <img src={item.imageUrl} className="product-thumb" alt="" />
                <button className="card-btn" >add to wishlist</button>
              </div>
              <div className="product-info">
                <h3 className="product-brand">{item.title}</h3>

                <span className="price">{item.price} zł</span>
                {/* <span className="actual-price">$40</span> */}
              </div>
            </div>
          )}

        </div>
      </div >
    );
  }

}
