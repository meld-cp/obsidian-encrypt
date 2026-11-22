import type { Translation } from '../i18n.ts';

// Korean (한국어). Terminology follows Obsidian's own Korean translation
// (vault = 보관함, reading view = 읽기 화면, keychain = 키체인, secret = 비밀).
export const ko: Translation = {
	// Commands (command palette)
	'command.clearSessionCache': '세션 비밀번호 캐시 지우기',
	'command.createNewNote': '새 암호화 노트 만들기',
	'command.lockAndCloseAll': '열려 있는 암호화 노트 모두 잠그고 닫기',
	'command.convertNote': '암호화 노트로 변환 또는 일반 노트로 되돌리기',
	'command.encryptSelection': '선택 영역 암호화',
	'command.decrypt': '복호화',

	// Ribbon icon labels
	'ribbon.newEncryptedNote': '새 암호화 노트',
	'ribbon.lockAndCloseAll': '열려 있는 암호화 노트 모두 잠그고 닫기',
	'ribbon.convertNote': '암호화 노트로 변환 또는 일반 노트로 되돌리기',
	'ribbon.encryptSelection': '선택 영역 암호화',
	'ribbon.decryptAtCursor': '커서 위치 복호화',

	// Context menus and view actions
	'menu.encryptNote': '노트 암호화',
	'menu.decryptNote': '노트 복호화',
	'menu.newEncryptedNote': '새 암호화 노트',
	'menu.changePassword': '비밀번호 변경',
	'menu.lockAndClose': '잠그고 닫기',
	'action.changePassword': '비밀번호 변경',
	'action.lockAndClose': '잠그고 닫기',

	// Password dialogs
	'modal.encryptNote.title': '노트 암호화',
	'modal.decryptNote.title': '노트 복호화',
	'modal.decryptFile.title': '"{name}" 복호화',
	'modal.changePassword.title': '"{name}" 비밀번호 변경',
	'modal.encryptText.title': '텍스트 암호화',
	'modal.decryptText.title': '텍스트 복호화',
	'form.password': '비밀번호',
	'form.passwordHintPlaceholder': '힌트: {hint}',
	'form.confirmPassword': '비밀번호 확인',
	'form.optionalHint': '비밀번호 힌트 (선택)',
	'form.hintPlaceholder': '비밀번호 힌트',
	'form.encrypt': '암호화',
	'form.decrypt': '복호화',
	'form.passwordsDontMatch': '비밀번호가 일치하지 않습니다',
	'form.showMarkerInReadingView': '읽기 화면에 암호화 표시 보이기',
	'form.textToEncrypt': '암호화할 텍스트',
	'form.hintMarkerError': '비밀번호 힌트에는 {hintMarker} 또는 {encryptedMarker}을(를) 넣을 수 없습니다. 계속하려면 이 표시를 지워 주세요.',

	// Decrypted text dialog
	'decryptModal.save': '저장',
	'decryptModal.copy': '복사',
	'decryptModal.copied': '복사했습니다!',
	'decryptModal.decryptInPlace': '평문으로 되돌리기',

	// Notices
	'notice.itemsCleared': '지운 항목: {count}개',
	'notice.noteEncrypted': '🔐 노트를 암호화했습니다 🔐',
	'notice.noteDecrypted': '🔓 노트를 복호화했습니다 🔓',
	'notice.decryptionFailed': '복호화에 실패했습니다',
	'notice.inlineDecryptionFailed': '❌ 복호화에 실패했습니다!',
	'notice.passwordRequired': '암호화 노트를 만들려면 비밀번호가 필요합니다',
	'notice.saveBeforeDetachFailed': '화면을 닫기 전에 파일을 저장하지 못했습니다',
	'notice.viewDataDecryptFailed': '화면에 불러온 데이터를 복호화하지 못했습니다',
	'notice.passwordChanged': '비밀번호를 변경했습니다',
	'notice.passwordNotChanged': '비밀번호를 변경하지 않았습니다',
	'notice.selectTextToEncrypt': '암호화할 텍스트를 선택해 주세요.',
	'notice.selectTextToDecrypt': '복호화할 텍스트를 선택하거나 암호화된 텍스트에 커서를 놓아 주세요.',
	'notice.nothingToEncrypt': '암호화할 내용이 없습니다.',
	'notice.nothingToDecrypt': '복호화할 내용이 없습니다.',
	'notice.unableToEncrypt': '이 내용은 암호화할 수 없습니다.',
	'notice.unableToDecrypt': '이 내용은 복호화할 수 없습니다.',
	'notice.inlineDialogFailed': '인라인 암호화 대화상자를 처리하지 못했습니다. 텍스트가 저장되지 않았습니다.',
	'notice.externalPasswordFileNotFound': '외부 비밀번호 파일을 찾을 수 없습니다',

	// Keychain explanations
	'keychain.settingsExplanation': '선택한 비밀이 암호화와 복호화의 기본 비밀번호로 쓰입니다. 비밀을 바꿔도 이미 암호화된 내용은 바뀌지 않습니다. 노트나 블록의 비밀번호를 바꿔도 비밀은 바뀌지 않습니다.',
	'keychain.passwordChangeExplanation': '이 변경은 이 노트 또는 인라인 블록에만 적용됩니다. 키체인 비밀과 다른 암호화된 내용은 그대로 유지됩니다.',

	// Settings
	'settings.confirmPassword.name': '비밀번호 확인 입력',
	'settings.confirmPassword.desc': '암호화할 때 비밀번호를 한 번 더 입력합니다. (권장)',
	'settings.rememberPassword.name': '비밀번호 기억',
	'settings.rememberPassword.desc': '세션 캐시 또는 선택한 비밀번호 제공 방식에서 비밀번호를 다시 사용합니다.',
	'settings.rememberBy.name': '비밀번호 기억 단위:',
	'settings.rememberBy.vault': '보관함',
	'settings.rememberBy.folder': '폴더',
	'settings.rememberBy.file': '파일',
	'settings.rememberBy.externalFile': '외부 파일',
	'settings.rememberBy.keychain': 'Obsidian 키체인',
	'settings.rememberBy.optionLabel': '{option}:',
	'settings.rememberBy.vaultDesc': '마지막으로 쓴 비밀번호를 보관함 전체에서 다시 사용합니다.',
	'settings.rememberBy.folderDesc': '폴더마다 비밀번호를 따로 기억합니다.',
	'settings.rememberBy.fileDesc': '파일마다 비밀번호를 따로 기억합니다.',
	'settings.rememberBy.externalFileDesc': '읽을 수 있고 비어 있지 않은 첫 번째 파일에서 비밀번호를 읽습니다.',
	'settings.rememberBy.keychainDesc': '선택한 비밀에서 비밀번호를 읽습니다.',
	'settings.rememberTimeout.name': '비밀번호 기억 시간',
	'settings.rememberTimeout.desc': '비밀번호를 기억할 시간(분)입니다. 0이면 Obsidian을 닫을 때까지 기억합니다.',
	'settings.keychainSecret.name': '키체인 비밀',
	'settings.keychainSecret.manageDesc': '비밀은 Obsidian 설정 → 키체인에서 관리합니다. 기기마다 비밀을 설정해야 합니다. 세션 캐시를 지워도 비밀은 삭제되지 않습니다.',
	'settings.externalFilePaths.name': '외부 파일 경로',
	'settings.externalFilePaths.desc': '한 줄에 경로 하나씩, 보관함 기준 상대 경로로 입력합니다(../ 포함). 데스크톱에서는 절대 경로도 쓸 수 있습니다. 접근 가능 여부는 플랫폼 권한에 따라 달라집니다.',
	'settings.externalFilePaths.placeholder': '한 줄에 경로 하나씩 입력',
	'settings.externalFilePaths.checkTooltip': '경로 확인',
	'settings.ribbonIcons.heading': '리본 아이콘',
	'settings.ribbonIcons.desc': '이 리본 아이콘을 표시합니다. 숨겨도 명령어는 계속 쓸 수 있습니다.',
	'settings.inplace.heading': '인라인 암호화',
	'settings.inplace.expandToWholeLines.name': '선택 영역을 줄 전체로 확장',
	'settings.inplace.expandToWholeLines.desc': '줄의 일부만 선택해도 줄 전체로 확장합니다.',
	'settings.inplace.markerSearchLimit.name': '표시 검색 범위',
	'settings.inplace.markerSearchLimit.desc': '암호화·복호화할 때 암호화 표시를 찾는 최대 글자 수입니다.',
	'settings.inplace.showMarkerWhenReading.name': '읽기 화면에 암호화 표시를 기본으로 보이기',
	'settings.inplace.showMarkerWhenReading.desc': '인라인 텍스트를 암호화할 때 읽기 화면에 표시가 보이도록 할지에 대한 기본값입니다.',

	// Default name for new encrypted notes
	'file.untitled': '무제',
};
