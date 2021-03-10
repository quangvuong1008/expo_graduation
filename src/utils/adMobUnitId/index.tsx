import { Platform } from 'react-native';

interface AdMobUnitId {
  mainAdUnitId: string,
  createAsset: string,
  profile: string,
  wallets: string
}

let adMobUnitId: AdMobUnitId;

if (Platform.OS === 'ios') {
  adMobUnitId = {
    mainAdUnitId: "ca-app-pub-3956553704092352/6436885410",
    createAsset: "ca-app-pub-3956553704092352/5867885682",
    profile: "ca-app-pub-3956553704092352/4944975812",
    wallets: "ca-app-pub-3956553704092352/6115405494"
  };
} else {
  adMobUnitId = {
    mainAdUnitId: "ca-app-pub-3956553704092352/5871044675",
    createAsset: "ca-app-pub-3956553704092352/3297670460",
    profile: "ca-app-pub-3956553704092352/2248506196",
    wallets: "ca-app-pub-3956553704092352/6609411277",
  };
}

export default adMobUnitId;