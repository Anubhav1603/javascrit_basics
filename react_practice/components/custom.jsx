import { useLocalStorage } from "../hooks/useLocalStorage";

export const CustomHook = () => {
  const [name, setName] = useLocalStorage("username", "");
  return (
    <>
      <h1>Example of Custom Hook</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello! {name}</h2>
    </>
  );
};
