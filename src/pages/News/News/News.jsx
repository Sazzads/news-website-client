import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData()
    const { title, details, _id, image_url, category_id } = news
    return (
<div>
<Card >
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="danger"><FaArrowLeft className='me-1'></FaArrowLeft>All News In This category</Button></Link>
            </Card.Body>
        </Card>
        <EditorsInsights></EditorsInsights>
</div>
    );
};

export default News;