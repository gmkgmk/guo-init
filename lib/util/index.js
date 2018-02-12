const os = require('os');
const tools = {
  /**
 * 获取用户目录
 */
  homedir() {
    let homedir = (() => {
      var env = process.env;
      var home = env.HOME;
      var user = env.LOGNAME || env.USER || env.LNAME || env.USERNAME;

      if (process.platform === 'win32') {
        return env.USERPROFILE || env.HOMEDRIVE + env.HOMEPATH || home || null;
      }

      if (process.platform === 'darwin') {
        return home || (user ? '/Users/' + user : null);
      }

      if (process.platform === 'linux') {
        return home || (process.getuid() === 0 ? '/root' : (user ? '/home/' + user : null));
      }

      return home || null;
    })()
    return homedir;
  },
  currentPath() {
    let currentPath = () => {
      return process.cwd()
    }
    return currentPath()
  }
}

module.exports = tools;