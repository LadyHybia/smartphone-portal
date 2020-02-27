package com.bbs.it18a.smartphoneportal.persistence.domain;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "listItem", types = { SmartphoneInfo.class })
public interface SmartphoneListInfo {
    Long getId();
    String getName();
    String getManufacturer();
    PriceCategory getPriceCategory();
}