export default function ByteList({ user }) {
  return (<div id="byteList" className="byteList">
    <div>{user.googleId}<br/>{user.name}</div>

  </div>);
}
