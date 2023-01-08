function getWallets() {
    let walletDataStr = window.localStorage.getItem('wallet-list');
    let dataLines = walletDataStr.split(';');
    let resultData = [];

    for (let i = 0; i < dataLines.length; i++) {
        if (dataLines[i].indexOf(',') < 0)
            continue;

        let datas = dataLines[i].split(',');
        let newItem = {
            'alias': datas[0],
            'address': datas[1]
        };
        resultData[i] = newItem;
    }

    return resultData;
}

function getRawWalletData() {
    return window.localStorage.getItem('wallet-list');
}

function saveWalletData(stringData) {
    window.localStorage.setItem('wallet-list', stringData);
}