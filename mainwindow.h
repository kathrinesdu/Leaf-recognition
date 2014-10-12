#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include<opencv2/opencv.hpp>
#include<iostream>
#include<vector>

#include "cmath"
using namespace cv;
using namespace std;
namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT
    
public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();
    QPixmap pixmap;
    Mat leaf;
    String recognized_leaf;
private slots:
    void on_pushButton_pressed();
    QImage putImage(const Mat& mat);
    void on_Button_next_pressed();

    void on_pushButton_2_pressed();

private:
    Ui::MainWindow *ui;
};

#endif // MAINWINDOW_H
