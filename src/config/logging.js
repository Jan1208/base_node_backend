import bunyan from 'bunyan';
import packageInfo from '../../package.json';

const log = bunyan.createLogger({ name: packageInfo.name });

export default log;
