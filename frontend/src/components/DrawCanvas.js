// import React, { Suspense } from 'react';
// import type from 'prop-types';
// import { CircularProgress } from '@material-ui/core';
// import Canvas from 'react-canvas-polygons';

// function DrawCanvas(props) {
//     const handleCleanCanva = () => props.canva.cleanCanvas
//     const imageInfoLength = Object.keys(props.imageInfo).length === 0;
//     return (
//         <div>

//                 <button variant="outlined" style={{ marginBottom: '20px' }}
//                     onClick={handleCleanCanva}
//                 >
//                     Clean Canvas
//                 </button>
//                 {imageInfoLength &&
//                     <CircularProgress color="secondary" />
//                 }
//                 <Canvas
//                     ref={canva => this.canva = canva}
//                     imgSrc={props.imageInfo.url}
//                     height={props.imageInfo.height}
//                     width={props.imageInfo.width}
//                     tool={props.tool}
//                     onCompleteDraw={props.onCompleteDraw}
//                     initialData={props.fenceData}
//                 />
//         </div>

//     )
// }

// export default DrawCanvas

import React, { Suspense } from "react";
import type from "prop-types";
import { CircularProgress } from "@material-ui/core";
import Canvas from "react-canvas-polygons";

class DrawCanvas extends React.PureComponent {
  handleCleanCanva = () => this.canva.cleanCanvas();

  render() {
    const { imageInfo, tool, onCompleteDraw, fenceData } = this.props;
    const imageInfoLength = Object.keys(imageInfo).length === 0;
    console.log(imageInfo);
    return (
      <Suspense fallback={<CircularProgress color="secondary" />}>
        <button
          variant="outlined"
          style={{ marginBottom: "20px" }}
          onClick={this.handleCleanCanva}
        >
          Clean Canvas
        </button>
        {imageInfoLength && <CircularProgress color="secondary" />}
        <Canvas
          ref={(canva) => (this.canva = canva)}
          imgSrc={imageInfo.url}
          height={imageInfo.height}
          width={imageInfo.width}
          tool={tool}
        //   onCompleteDraw={onCompleteDraw}
        //   initialData={fenceData}
        />
      </Suspense>
    );
  }
}

export default DrawCanvas;

DrawCanvas.propTypes = {
  tool: type.string,
  imageInfo: type.object,
};
