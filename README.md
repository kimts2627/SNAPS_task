# 스냅스 주니어 프론트엔드 개발자 김태수

## Swiper Component
  react-slick 라이브러리를 사용하여 주 기능을 구현 하였습니다.

  현재 렌더되어있는 쇼케이스 사진을 state로 관리 해, 썸네일 및 메인 쇼케이스 사진을
  일괄적으로 관리 하였습니다.

  json 파일로 주어진 데이터를 Array.map 메소드를 통해 구현 하였습니다.

## Options Component
  json 파일로 주어진 옵션 데이터를 Array.map 메소드를 통해 아이콘으로 구현 하였습니다.

  옵션 선택 시, 선택 된 옵션에 강조 스타일을 적용 하였습니다.

  선택된 옵션들을 state로 관리하여, '만들기' 클릭 시 저장된 옵션들을 정제하여
  콘솔창에 출력 가능합니다.

## State Management
  React 상태 관리를 위하여, Redux, React-Redux 라이브러리를 사용 하였습니다.
  DucksPattern을 적용하여 directory 구조를 설계 하였습니다.
