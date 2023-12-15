import { useLocation, useSearchParams } from "react-router-dom";
import Counter from "../features/Counter";
import { MyApp } from "./MyComponent";
import { MyApp1 } from "./Hook";
const About = () => {
  /* 第一种search方法传递参数：用useSearchParams来获取 */
  const [getSearchArr] = useSearchParams();
  console.log(getSearchArr, getSearchArr.getAll("name"));
  /* 第二种state属性携带参数：用useLocation来获取 */
  const currentLocation = useLocation();
  console.log(currentLocation);
  return (
    <div className="About">
      <MyApp />
      <MyApp1 />
      <Counter />
      我是关于页 传递过来的参数：{currentLocation.state}{" "}
      {getSearchArr.getAll("name")} {getSearchArr.getAll("age")}
    </div>
  );
};
export default About;
