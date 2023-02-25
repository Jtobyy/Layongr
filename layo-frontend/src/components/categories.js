import React from 'react';

import $ from 'jquery';

import shirtIcon from '../images/shirt-icon.png';
import dressIcon from '../images/dress-icon.png';
import coatIcon from '../images/coat-icon.png';
import adireIcon from '../images/adire-icon.png';
import jumperIcon from '../images/jumper-icon.png';
import jerseyIcon from '../images/jersey-icon.png';
import skirtIcon from '../images/skirt-icon.png';
import jeansIcon from '../images/jeans-icon.png';
import jacketIcon from '../images/jacket-icon.png';
import gownIcon from '../images/gown-icon.png';

import { connect } from "react-redux";
import { fetchFabrics, fetchTags, selectTag } from "../features/fabricsSlice";

const RenderTags = (props) => {
    // console.log(props.tags)
    let i = 0;
    let el;
    const tags = props.tags.map((tag) => {
        if (i == props.currentTag) el = <div className='catItem selectedCatItem' data-key={i} data-uid={tag.id} key={i}>{tag.name}</div>;
        else el = <div className='catItem' data-key={i} data-uid={tag.id} key={i}>{tag.name}</div>;
        i++;
        return el;
    })
    return (
        <div className='d-flex flex-container  items-wrapper text-center justify-content-between align-items-center '> {tags} </div>
    )
}

class Categories extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        $('.catItem').on('click', (e) => {
            console.log(e)
            let element = e.target
            $('.catItem').removeClass('selectedCatItem')
            element.classList.add('selectedCatItem')

            this.props.selectTag(e.target.dataset.key)
            this.props.fetchFabrics({cat: 'F', tags: e.target.dataset.uid})
            // Get items of this category from the endpoint
        })

        const tagStatus = this.props.tagStatus
        if (tagStatus === 'idle') {
            console.log('tag fetch idle')
            this.props.fetchTags()
        }
        else if (tagStatus === 'failed') {
            console.log('unable to fetch tags')
            console.log(this.props.tagError)
        }
        else if (tagStatus === 'succeeded') {
            console.log('got tags')
            // console.log(this.props.tags)
        } 
    }

    componentDidUpdate() {
        $('.catItem').on('click', (e) => {
            console.log(e)
            let element = e.target
            $('.catItem').removeClass('selectedCatItem')
            element.classList.add('selectedCatItem')

            this.props.selectTag(e.target.dataset.key)
            this.props.fetchFabrics({cat: 'F', tags: e.target.dataset.uid})
            // Get items of this category from the endpoint
        })   
    }

    render() {
    if (this.props.category === "products") 
        return (
            
            <div className="categories-carousel carousel carousel-dark slide " data-bs-rid="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active w-100 d-flex justify-content-center" data-bs-interval="10000">
                        <div className='d-flex flex-container text-center justify-content-between align-items-center '>
                            <div>
                                <img src={shirtIcon} alt='shirt'></img>
                                <p>Shirt</p>
                            </div>
                            <div>
                                <img src={dressIcon} alt='dress'></img>
                                <p>Dress</p>
                            </div>
                            <div>
                                <img src={coatIcon} alt='coat'></img>
                                <p>Coat</p>
                            </div>
                            <div>
                                <img src={adireIcon} alt='adire'></img>
                                <p>Adire</p>
                            </div>
                            <div>
                                <img src={jumperIcon} alt='jumper'></img>
                                <p>Jumper</p>
                            </div>
                            <div>
                                <img src={jerseyIcon} alt='jersey'></img>
                                <p>Jersey</p>
                            </div>
                            <div>
                                <img src={skirtIcon} alt='skirt'></img>
                                <p>Skirt</p>
                            </div>
                            <div>
                                <img src={jeansIcon} alt='jeans'></img>
                                <p>Jeans</p>
                            </div>
                            <div>
                                <img src={jacketIcon} alt='jacket'></img>
                                <p>Jacket</p>
                            </div>
                            <div>
                                <img src={gownIcon} alt='gown'></img>
                                <p>Gown</p>
                            </div>
                        </div>    
                    </div>
                </div>
                <button className="carousel-control carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )

    else if (this.props.category === "fabrics") 
        return (
            <div className='d-flex justify-content-center' >
                <div className="categories-carousel carousel carousel-dark slide w-75" data-bs-rid="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active w-100 d-flex justify-content-center" data-bs-interval="10000">
                            <RenderTags tags={this.props.tags} currentTag={this.props.currentTag} />
                        </div>
                    </div>
                    <button className="carousel-control carousel-control-prev" style={{width: 'fit-content'}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control carousel-control-next" style={{width: 'fit-content'}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        tags: state.fabrics.tags,
        tagStatus: state.fabrics.tagStatus,
        currentTag: state.fabrics.currentTag,
        tagErrorMessage: state.fabrics.tagError,
    };
};

const mapDispatchToProps = () => ({ 
    fetchFabrics,    
    fetchTags,
    selectTag,
});

export default connect(mapStateToProps, mapDispatchToProps())(Categories)