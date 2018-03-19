import React from 'react';
import {Card, CardTitle, CardBlock} from 'reactstrap';
import TEXT from './../../../text';
import Gallery from 'react-grid-gallery';

const DMGallery = (props) =>
    <Gallery images={props.images} maxRows={3}/>;

const processImages = (images) => images.map(image => {
    return {
        src: `/api/images/${image.id}`,
        thumbnail: `/api/images/${image.id}`,
        thumbnailWidth: 200,
        thumbnailHeight: 100
    }
});

const gallery = (props) => (
    <Card className="mb-2">
        <CardBlock >
            <CardTitle className="text-left">{TEXT.ROUTE_PAGE.GALLERY}</CardTitle>
            <DMGallery images={processImages(props.images)}/>
        </CardBlock>
    </Card>
);

export default gallery;