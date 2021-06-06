// 设置部分可选
type SelectPartial<T, V extends keyof T> = Partial<Pick<T, V>> & Omit<T, V>;
interface User {
  id: number;
  age: number;
  name: string;
}
type Final = SelectPartial<User, "id" | "age">;
const user: Final = {
  name: "user",
  age: 30,
};

// 强制转换类型
type StringMap<T> = {
  [P in keyof T]: string;
};
function showType(args: StringMap<{ id: number; name: string }>) {
  console.log(args);
}

showType({ id: "1", name: "test" });
