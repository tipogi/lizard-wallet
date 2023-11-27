import { SVGProps } from "react";
import Svg, { Path } from "react-native-svg";

export function MultipleLayers(props: SVGProps<SVGSVGElement>) {
    return (
      <Svg 
        width={props.fontSize}
        height={props.fontSize}
        viewBox="0 0 24 24"
      >
        <Path 
          fill={props.color}
          fillRule="evenodd" 
          d="M13.155 3.36c-.671-.35-1.58-.355-2.257-.006c-2.593 1.34-4.945 2.875-7.006 4.578c-.319.263-.545.646-.541 1.096c.004.449.234.826.551 1.085c2.044 1.671 4.398 3.208 6.943 4.537c.671.35 1.58.355 2.257.006c2.593-1.34 4.945-2.875 7.006-4.578c.319-.263.545-.646.541-1.096c-.004-.449-.235-.826-.551-1.085c-2.044-1.671-4.398-3.208-6.943-4.537Zm-1.57 1.327a1.07 1.07 0 0 1 .876.003c2.429 1.268 4.667 2.727 6.606 4.302c-1.95 1.601-4.182 3.055-6.653 4.331c-.24.124-.633.123-.875-.003c-2.429-1.268-4.667-2.727-6.607-4.302c1.951-1.601 4.183-3.055 6.654-4.331Z" 
          clipRule="evenodd"
        />
        <Path 
          fill={props.color}
          d="M21.197 12.698a.75.75 0 0 1-.239 1.033l-6.107 3.813c-.829.518-1.857.757-2.851.757s-2.022-.24-2.851-.756l-6.04-3.77a.75.75 0 1 1 .794-1.273l6.04 3.77c.544.34 1.283.529 2.057.529c.773 0 1.512-.19 2.056-.53l6.108-3.812a.75.75 0 0 1 1.033.239Z"
        />
        <Path 
          fill={props.color}
          d="M21.197 16.453a.75.75 0 0 1-.239 1.033L15.67 20.79c-1.058.66-2.38.971-3.67.971c-1.288 0-2.61-.31-3.669-.97l-5.222-3.26a.75.75 0 0 1 .795-1.273l5.222 3.26c.773.483 1.807.743 2.875.743s2.102-.26 2.875-.743l5.288-3.303a.75.75 0 0 1 1.034.239Z"
        />
      </Svg>
    )
  }