#-------------------------------------------------
#
# Project created by QtCreator 2013-06-09T16:52:48
#
#-------------------------------------------------

QT       += core gui\
            webkit

TARGET = Leaf_recognition
TEMPLATE = app

CONFIG += link_pkgconfig
PKGCONFIG += opencv
SOURCES += main.cpp\
        mainwindow.cpp

HEADERS  += mainwindow.h

FORMS    += mainwindow.ui

RESOURCES += \
    htmls.qrc
