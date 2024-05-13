const user = {
  name: 'Enrique Pérez',
  imageUrl: 'https://us.123rf.com/450wm/pakete/pakete2201/pakete220100005/183029546-clave-de-sol-en-el-fondo-del-personal-de-m%C3%BAsica.jpg?ver=6',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
