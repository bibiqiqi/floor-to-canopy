import Slider from 'react-touch-drag-slider'


export default function PlantCard(props) {
  // function displayImages(imgArray){
  //   const imgs = imgArray.map((e, i) => {
  //     return (
  //       <img
  //         className='plant-card'
  //         src={props.data}
  //       />
  //     )
  //   });
  //   return imgs
  // }
  // {displayImages(props.imgs)}

  return (
    <div id="plant-card">
     <header>{props.plantData.commonNames[0]}</header>
     <h2>{props.plantData.scientificName}</h2>
     <Slider
       onSlideComplete={(i) => {
         console.log('finished dragging, current slide is', i)
       }}
       onSlideStart={(i) => {
         console.log('started dragging on slide', i)
       }}
       activeIndex={0}
       threshHold={100}
       transition={0.5}
       scaleOnDrag={true}
     >
       {props.plantData.images.map(({ url, alt }, index) => (
         <img src={`pics/${url}`} key={index} alt={alt} />
       ))}
     </Slider>
     <p>{props.plantData.description}</p>
    </div>
  );
}
