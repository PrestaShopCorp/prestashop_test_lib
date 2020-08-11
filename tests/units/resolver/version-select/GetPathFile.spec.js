require('module-alias/register');

const VersionSelectResolver = require('@resolvers/VersionSelectResolver.js');
const assert = require('assert');
const getRequireClassExtends = require('@unitTests/data/getFilePath/baseFilePath');
const getRequireCustomClassExtends = require('@unitTests/data/getFilePath/customFilePath');

describe('Testing resolver retroCompact getRequire', () => {
  it('should call common pathfile', () => {
    const versionSelectResolver = new VersionSelectResolver('177');
    assert.equal(versionSelectResolver.getFilePath(
      'kernel/common/BO/login/index.js',
      getRequireClassExtends,
    ),
    `${process.cwd()}/node_modules/prestashop_test_lib/kernel/common/BO/login/index.js`,
    );
  });

  it('should call specific version pathfile', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.8');
    assert.equal(versionSelectResolver.getFilePath(
      'kernel/common/BO/login/index.js',
      getRequireClassExtends,
    ),
    `${process.cwd()}/node_modules/prestashop_test_lib/versions/v178/BO/login/index.js`,
    );
  });

  it('should call specific version pathfile with directory', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.8', getRequireClassExtends);
    assert.equal(versionSelectResolver.getFilePath(
      'kernel/common/BO/login/index.js',
      getRequireClassExtends,
    ),
    `${process.cwd()}/node_modules/prestashop_test_lib/versions/v178/BO/login/index.js`,
    );
  });

  it('should call custom pathfile', () => {
    const versionSelectResolver = new VersionSelectResolver('177');
    assert.equal(versionSelectResolver.getFilePath(
      'kernel/common/BO/login/index.js',
      getRequireCustomClassExtends,
    ),
    `${process.cwd()}/myfile.js`,
    );
  });
});
