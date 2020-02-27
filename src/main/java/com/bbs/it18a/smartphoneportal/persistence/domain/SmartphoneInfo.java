package com.bbs.it18a.smartphoneportal.persistence.domain;


import javax.persistence.*;

@Entity
public class SmartphoneInfo {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(unique=true, nullable=false)
    private long id;
    private String name;
    private String manufacturer;
    @Column(length = 512)
    private String description;
    @Column(length = Integer.MAX_VALUE)
    private  byte[] frontPictureName;
    @Column(length = Integer.MAX_VALUE)
    private byte[] backPictureName;
    private Float displaySizeInInches;
    private Integer resolutionXInPixel;
    private Integer resolutionYInPixel;
    private String processorName;
    private Float weightInGram;
    private PriceCategory priceCategory;

    public String getManufacturer() {
        return manufacturer;
    }

    public Float getDisplaySizeInInches() {
        return displaySizeInInches;
    }

    public Integer getResolutionXInPixel() {
        return resolutionXInPixel;
    }

    public Integer getResolutionYInPixel() {
        return resolutionYInPixel;
    }

    public String getProcessorName() {
        return processorName;
    }

    public Float getWeightInGram() {
        return weightInGram;
    }

    public PriceCategory getPriceCategory() {
        return priceCategory;
    }

    public String getDescription() {
        return description;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public  byte[] getFrontPictureName() {
        return frontPictureName;
    }

    public byte[] getBackPictureName() {
        return backPictureName;
    }
}