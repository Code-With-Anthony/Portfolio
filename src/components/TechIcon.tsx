export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <div>
      <Component className="size-10" />
    </div>
  );
};
