@ECHO OFF

ECHO ----------------
ECHO 1 - npm run dev
ECHO 2 - npm run lint
ECHO 3 - npm run lint-fix
ECHO 10 - npm run git-reset
ECHO ----------------

SET /P input="ENTER: "

IF %input% == 1 (
	CALL npm run dev
)

IF %input% == 2 (
	CALL npm run lint
)

IF %input% == 3 (
	CALL npm run lint-fix
)

IF %input% == 10 (
	CALL npm run git-reset
)

ECHO ----------------

ECHO FINISHED

PAUSE
