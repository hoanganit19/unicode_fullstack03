import { memo } from "react";
const Content = memo(function Content() {
  console.log("Content Render");
  return (
    <div>
      <h2>This is a content</h2>
    </div>
  );
});

export default Content;
