package com.bbs.it18a.smartphoneportal.persistence;

import com.bbs.it18a.smartphoneportal.persistence.domain.PriceCategory;
import com.bbs.it18a.smartphoneportal.persistence.domain.SmartphoneInfo;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@CrossOrigin(origins = "*")
public interface SmartphoneInfoRepository extends PagingAndSortingRepository<SmartphoneInfo, Long> {
    List<SmartphoneInfo> findByNameContainingIgnoreCaseOrManufacturerContainingIgnoreCase(
            String name, String manufacturer);
    List<SmartphoneInfo> findByNameContainingIgnoreCaseAndPriceCategoryOrManufacturerContainingIgnoreCaseAndPriceCategory(
            String name, PriceCategory priceCategory1, String manufacturer, PriceCategory priceCategory2);
}

