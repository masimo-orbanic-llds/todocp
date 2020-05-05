import React, {useEffect, useState} from 'react';
import CodePush from 'react-native-code-push';
import {StyleSheet, View, Alert} from 'react-native';

import {Screen, Text, Spacer, Button} from '../components';

const S = StyleSheet.create({
  info: {flexDirection: 'row'},
  headline: {textAlign: 'center', fontWeight: 'bold'},
});

function AppInfoScreen() {
  const [packageMetadata, setPackageMetadata] = useState({});

  useEffect(() => {
    async function getPackageMetadata() {
      const data = await CodePush.getCurrentPackage();
      setPackageMetadata(data);
    }
    getPackageMetadata();
  }, []);
  const handleCheckForUpdatePress = async () => {
    CodePush.checkForUpdate('FX3RJRdjBHYsAjgYkLY4NwX6FiT3w8JpQZVG3').then(
      (update) => {
        if (!update) {
          Alert.alert('', 'The app is up to date!');
        } else {
          Alert.alert('', 'An update is available! ');
        }
      },
    );
  };
  return (
    <Screen>
      <Spacer medium />
      <Button title="Check for update" onPress={handleCheckForUpdatePress} />
      <Spacer medium />

      <Text large secondaryColor style={S.headline}>
        Package metadata
      </Text>
      {Object.keys(packageMetadata)
        .filter((key) => typeof packageMetadata[key] !== 'function')
        .map((key) => {
          let value = packageMetadata[key];
          if (typeof packageMetadata[key] === 'boolean') {
            value = packageMetadata[key] ? 'true' : 'false';
          }
          return (
            <>
              <Spacer medium />
              <View style={S.info}>
                <Text>{key}</Text>
                <Spacer medium />
                <Text secondaryColor>{value}</Text>
              </View>
            </>
          );
        })}
    </Screen>
  );
}
/*
appVersion
binaryModifiedTime
bundlePath
deploymentKey
downloadUrl
failedInstall
isFirstRun
isMandatory
isPending
label
packageHash
packageSize
_isDebugOnly

appVersion: "1.0"
binaryModifiedTime: "1588685487281"
bundlePath: "/CodePush/index.android.bundle"
deploymentKey: "FX3RJRdjBHYsAjgYkLY4NwX6FiT3w8JpQZVG3"
downloadUrl: "https://codepushupdates.azureedge.net/storagev2/e14eKXGNfePhQT5otF0SPorf8cD4305ac051-ce56-4e2e-b72e-5d5c08c202bf"
failedInstall: false
install: ƒ install()
isFirstRun: false
isMandatory: false
isPending: false
label: "v2"
packageHash: "38e22beabbb1aa9997c1f7b6872eebca5a6148dedc9be66fd59ffc8ca9fab36a"
packageSize: 268014
_isDebugOnly: true
*/

export default AppInfoScreen;
