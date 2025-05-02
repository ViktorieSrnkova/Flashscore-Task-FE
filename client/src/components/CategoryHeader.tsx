import React, { CSSProperties } from "react";

interface CategoryHeaderProps {
  style?: CSSProperties;
  content: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ style, content }) => {
  return (
    <div style={style} className="category-wrapper">
      {content}
    </div>
  );
};

export default CategoryHeader;
