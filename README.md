# 미션 - 숫자 야구

## 플로우

1. 자동차 이름 입력받기
2. 시도 횟수 입력받기
3. 입력값 검증
   1. 올바르지 않은 입력일 시, 에러 처리
   2. 올바른 입력일 시, 게임 실행하기
4. 입력받은 횟수만큼 이동하기
5. 각 이동마다 각 자동차별로 결과 출력
6. 최종 우승자 출력

## 기능 요구 사항

### 올바른 입력값이란

1. 자동차 이름은 쉼표(,)로 구분됨
2. 각 자동차 이름은 5자 이하여야 함
3. 시도할 횟수는 정수

### 이동 방법

0에서 9 사이의 무작위 값을 구하고, 4 이상인 경우에만 이동

### 이동 결과 출력

```
(이름1) : -
(이름2) :
(이름3) : --
```

### 우승자 출력

단독 우승자인 경우

```
최종 우승자 : (이름)
```

공동 우승자가 있는 경우

```
최종 우승자 : (이름1), (이름2)
```
