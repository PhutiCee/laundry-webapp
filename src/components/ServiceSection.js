import React from 'react'
import ItemCard from './ItemCard'
import data from './DataModel'
import Cart from './Cart'

function ServiceSection() {

  return (
    <>
      <h1 className='text-center mt-0'>All Items</h1>
      <section className='pb-4 container'>
        <div className='row justify-content-center'>
          {data.productData.map((item, index) => {
            return (
              <ItemCard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
            )
          })}
          
        </div>
      </section>
      <Cart />
    </>
  )
}

export default ServiceSection




















// // components/ServiceSelection.js
// import React, { useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';

// const ServiceSelection = () => {
//   const [services, setServices] = useState({
//     washAndFold: 0,
//     dryCleaning: 0,
//     ironing: 0,
//     shirt: 0,
//     tshirt: 0,
//     dresses: 0,
//     sweater: 0,
//     shorts: 0,
//     sleeveless: 0,
//     jeans: 0,
//   });

//   const handleServiceChange = (service, value) => {
//     setServices((prevServices) => ({
//       ...prevServices,
//       [service]: value,
//     }));
//   };

//   return (
//     <Container className="service-selection">
//       <h2>Select Services</h2>
//       <Row>
//         <Col md={4}>
//           <Card className="service-card">
//             <div className="icon">
//             <Card.Img variant="top" src="./img/shirt.png" style={{ width: "50px", height: "50px" }} />
//             </div>
//             <h3>Shirt</h3>
//             <p>Effortless laundry for your everyday clothes.</p>
//             <input
//               type="number"
//               value={services.shirt}
//               onChange={(e) =>
//                 handleServiceChange("shirt", e.target.value)
//               }
//             />
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="service-card">
//             <div className="icon">
//             <Card.Img variant="top" src="./img/tshirt.png" style={{ width: "50px", height: "50px" }} />
//             </div>
//             <h3>T-shirt</h3>
//             <p>Special care for delicate and formal attire.</p>
//             <input
//               type="number"
//               value={services.tshirt}
//               onChange={(e) =>
//                 handleServiceChange("tshirt", e.target.value)
//               }
//             />
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="service-card">
//             <div className="icon">
//             <Card.Img variant="top" src="./img/dresses.png" style={{ width: "50px", height: "50px" }} />
//             </div>
//             <h3>Dresses</h3>
//             <p>Perfectly ironed clothes for a polished look.</p>
//             <input
//               type="number"
//               value={services.dresses}
//               onChange={(e) => handleServiceChange("dresses", e.target.value)}
//             />
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="service-card">
//             <div className="icon">
//             <Card.Img variant="top" src="./img/jeans.png" style={{ width: "50px", height: "50px" }} />
//             </div>
//             <h3>jeans</h3>
//             <p>Perfectly ironed clothes for a polished look.</p>
//             <input
//               type="number"
//               value={services.jeans}
//               onChange={(e) => handleServiceChange("jeans", e.target.value)}
//             />
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="service-card">
//             <div className="icon">
//             <Card.Img variant="top" src="./img/sweater.png" style={{ width: "50px", height: "50px" }} />
//             </div>
//             <h3>Sweater</h3>
//             <p>Perfectly ironed clothes for a polished look.</p>
//             <input
//               type="number"
//               value={services.sweater}
//               onChange={(e) => handleServiceChange("sweater", e.target.value)}
//             />
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="service-card">
//             <div className="icon">
//             <Card.Img variant="top" src="./img/shorts.png" style={{ width: "50px", height: "50px" }} />
//             </div>
//             <h3>Shorts</h3>
//             <p>Perfectly ironed clothes for a polished look.</p>
//             <input
//               type="number"
//               value={services.shorts}
//               onChange={(e) => handleServiceChange("shorts", e.target.value)}
//             />
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="service-card">
//             <div className="icon">
//             <Card.Img variant="top" src="./img/sleeveless.png" style={{ width: "50px", height: "50px" }} />
//             </div>
//             <h3>Sleeveless</h3>
//             <p>Perfectly ironed clothes for a polished look.</p>
//             <input
//               type="number"
//               value={services.sleeveless}
//               onChange={(e) => handleServiceChange("sleeveless", e.target.value)}
//             />
//           </Card>
//         </Col>
//       </Row>

//       <div className="d-grid gap-2">
//       <Button variant="primary" size="lg">
//         Proceed
//       </Button>
//     </div>
//     </Container>
//   );
// };

// export default ServiceSelection;
