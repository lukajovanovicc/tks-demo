import React, { FC } from 'react';
import { StageStoryblok } from '../../../component-types-sb';
interface Props {
  item: StageStoryblok;
}

const Stage: FC<Props> = ({ item }) => {
  return <div>Stage</div>;
};

export default Stage;
