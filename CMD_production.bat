@ECHO OFF

ECHO ----------------
ECHO 1 - npm run build1
ECHO 2 - npm run build2
ECHO 3 - npm run serve
ECHO 4 - npm run analyze
ECHO ----------------

SET /P input="ENTER: "

IF %input% == 1 (
	CALL npm run build1
)

IF %input% == 2 (
	CALL npm run build2
)

IF %input% == 3 (
	CALL npm run serve
)

IF %input% == 4 (
	CALL npm run analyze
)

ECHO ----------------

ECHO FINISHED

PAUSE
