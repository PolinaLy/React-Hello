type FlexBlockProps = {
    children: React.ReactNode; // 👈️ type children
  };
  
export function FlexBlock(props: FlexBlockProps) {
    return (
        <div style={{display: 'flex', width: '60%', justifyContent: 'space-between', margin: '50px auto 0'}}>{props.children}</div>
    )
}