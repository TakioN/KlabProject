import SidePanel from "./SidePanel";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import diary1 from '../img/diary.png';
import diary2 from '../img/diary2.png';
import diary3 from '../img/diary3.png';
import diary4 from '../img/diary4.png';
import diary5 from '../img/diary.png';
import diary6 from '../img/diary2.png';

function Search(){
    return(
        <div>
            <SidePanel />
            <div className='mainscreen' style={{marginRight: '200px'}}>
                <Container>
                    <Row>
                        <Col className='search_grid'><img src={diary1} alt="" /></Col>
                        <Col className='search_grid'><img src={diary2} alt="" /></Col>
                        <Col className='search_grid'><img src={diary3} alt="" /></Col>
                    </Row>
                    <Row>
                        <Col className='search_grid'><img src={diary4} alt="" /></Col>
                        <Col className='search_grid'><img src={diary5} alt="" /></Col>
                        <Col className='search_grid'><img src={diary6} alt="" /></Col>
                    </Row>
                    <Row>
                        <Col className='search_grid'><img src={diary1} alt="" /></Col>
                        <Col className='search_grid'><img src={diary2} alt="" /></Col>
                        <Col className='search_grid'><img src={diary3} alt="" /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Search;