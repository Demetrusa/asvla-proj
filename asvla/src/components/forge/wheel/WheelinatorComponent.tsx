import { useEffect, useRef } from "react";
import "./WheelinatorComponent.scss";

type WheelinatorProps = {
  layers?: number;
  animationTiming?: number[];
  dummySpins?: number[];
};

let savedSpinValues = [0, 0, 0];

const WheelinatorComponent: React.FC<WheelinatorProps> = ({
  layers = 1,
  animationTiming = [5, 4, 3],
  dummySpins = [4, 3, 2],
}) => {
  const layer0 = useRef<HTMLDivElement | null>(null);
  const layer1 = useRef<HTMLDivElement | null>(null);
  const layer2 = useRef<HTMLDivElement | null>(null);
  const layerNodes = [layer0, layer1, layer2];

  const initLayer = (layer: number) => {
    const currLayerChildren = layerNodes[layer]?.current?.children[0].children;
    if (currLayerChildren) {
      for (let i = 0; i < currLayerChildren.length; i++) {
        const element = currLayerChildren[i] as HTMLElement;
        element.style.transform = `rotate(${
          (360 / currLayerChildren.length) * i
        }deg)`;
        element.style.width = `${(100 / currLayerChildren.length) * 3.14}%`;
        element.style.zIndex = String(i);
      }
    }
    if (layerNodes[layer]?.current) {
      layerNodes[layer].current.style.transform = "rotate(0deg)";
      layerNodes[
        layer
      ].current.style.animationDuration = `${animationTiming[layer]}s`;
    }
  };

  const initWheel = (layers: number) => {
    for (let i = 0; i < layers; i++) {
      initLayer(i);
    }
  };

  const setAnimationKeyframe = (winner: number, layer: number) => {
    const currLayerChildren = layerNodes[layer]?.current?.children[0].children;
    if (!currLayerChildren) return;

    const spinValue =
      360 * dummySpins[layer] -
      ((winner - 1) * 360) / currLayerChildren.length -
      (savedSpinValues[layer] % 360);

    let currentStyle = document.getElementById(`keyframe-level-${layer}`);
    currentStyle?.remove();

    document.head.insertAdjacentHTML(
      "beforeend",
      `<style id="keyframe-level-${layer}">
        @keyframes spinning-${layer} {
          from {
            transform: rotate(${savedSpinValues[layer]}deg);
          }
          to {
            transform: rotate(${savedSpinValues[layer] + spinValue}deg);
          }
        }
      </style>`
    );

    savedSpinValues[layer] += spinValue;
    setTimeout(() => {
      if (layerNodes[layer]?.current) {
        layerNodes[
          layer
        ].current.style.transform = `rotate(${savedSpinValues[layer]}deg)`;
      }
    }, 500);
  };

  const spin = (winner: number, layer: number) => {
    const currLayerChildren = layerNodes[layer]?.current?.children[0].children;
    if (
      !currLayerChildren ||
      winner <= 0 ||
      typeof winner !== "number" ||
      winner > currLayerChildren.length
    ) {
      return;
    }

    setAnimationKeyframe(Math.floor(winner), layer);

    if (layerNodes[layer]?.current) {
      layerNodes[layer].current.classList.remove("active");
      setTimeout(() => {
        layerNodes[layer]?.current?.classList.add("active");
      }, 10);
    }
  };

  const handleSpin = () => {
    spin(7, 0); // Example winner and layer for demonstration
  };

  useEffect(() => {
    initWheel(layers);
  }, [layers]);

  return (
    <div className="wheelinator">
      <div
        className="wheelinator-layer-0 wheelinator-layer-common"
        ref={layer0}
      >
        <div className="wheel-container">
          {Array.from({ length: 10 }).map((_, idx) => (
            <div className="wheel-segment" key={idx}>
              Segment {idx + 1}
            </div>
          ))}
        </div>
      </div>
      {layers > 1 && (
        <div
          className="wheelinator-layer-1 wheelinator-layer-common"
          ref={layer1}
        >
          <div className="wheel-container">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div className="wheel-segment" key={idx}>
                Segment {idx + 1}
              </div>
            ))}
          </div>
        </div>
      )}
      {layers > 2 && (
        <div
          className="wheelinator-layer-2 wheelinator-layer-common"
          ref={layer2}
        >
          <div className="wheel-container">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div className="wheel-segment" key={idx}>
                Segment {idx + 1}
              </div>
            ))}
          </div>
        </div>
      )}
      <div
        className="wheelinator__button"
        id="spin-button"
        onClick={handleSpin}
      >
        Spin
      </div>
    </div>
  );
};

export default WheelinatorComponent;
