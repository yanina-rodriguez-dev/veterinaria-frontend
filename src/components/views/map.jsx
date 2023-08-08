import 'bootstrap/dist/css/bootstrap.css';

const MapIframe = () => {
  const latitude = -26.836700816779466;
  const longitude = -65.21206735497775;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102222386725!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1690425369461!5m2!1ses-419!2sar`;

  return (
    <div className='embed-responsive embed-responsive-16by9 mx-auto mb-5' style={{ width: '50%', height: '350px'}}>
      <iframe
        title="Mapa"
        width="100%"
        height="100%"       
        src={mapUrl}
        allowFullScreen
      />
    </div>
  );
};
export default MapIframe;