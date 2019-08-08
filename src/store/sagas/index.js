import { fork, all } from 'redux-saga/effects'
import datasetListSaga from './dataset-list-saga'
import datasetSaga from './dataset-saga'
import datasetPreviewSaga from './dataset-preview-saga'
import loginSaga from './login-saga'
import processLoginSaga from './process-login-saga'
import logoutSaga from './logout-saga'
import datasetDownloadSaga from './dataset-download-saga'
import datasetQuerySaga from './dataset-query-saga'

export default function* allSagas() {
  yield all([
    fork(datasetListSaga),
    fork(datasetSaga),
    fork(datasetPreviewSaga),
    fork(loginSaga),
    fork(processLoginSaga),
    fork(logoutSaga),
    fork(datasetDownloadSaga),
    fork(datasetQuerySaga)
  ])
}
