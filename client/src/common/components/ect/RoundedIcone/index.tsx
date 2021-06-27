import React from 'react';
import WithLink from '../../hoc/WithLink'
import { isUndefined } from '../../../utils';
import "./RoundedIcone.scss";

type propsIcone = {
  customstyle?: React.CSSProperties,
  link?: string,
  width?: number | string,
  image: String | HTMLImageElement,
}

export default function RoundedIcone(props: propsIcone): any {
  let { width, link, image, customstyle } = props;
  let height;
  width = height = isUndefined(width) ? 40 + "px" : width;

  let initialBaseComponent = <div className="roundedIcone" {...props} style={{ ...customstyle, width: width, height: height, backgroundImage: `url(${image})` }}></div>;
  let FinalRes = isUndefined(link) ? initialBaseComponent : WithLink(initialBaseComponent);
  return (
    <React.Fragment>
      {FinalRes}
    </React.Fragment>
  );
}
