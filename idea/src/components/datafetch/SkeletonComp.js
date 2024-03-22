import Skeleton from '@mui/material/Skeleton';
import React from 'react';

const SkeletonComp = () => {
    return ( 
        <div className="dataFetch">
          <div className="dataProduct">
            {[...Array(8)].map((_, index) => (
              <div className="dataItem" key={index}>
                <Skeleton height={450} width={350} />
                <p>
                  <Skeleton height={30} width={140} />
                </p>
                <p>
                  <Skeleton height={50} width={100} />
                </p>
              </div>
            ))}
          </div>
        </div>
     );
}

export default SkeletonComp;